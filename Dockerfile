# The site image: the static site served by nginx, which also passes /api/ on to the API server. Build arguments:
# SITE_URL, the public address (canonical links); PUBLIC_DESKTOP_REPO, the GitHub repository (owner/name) whose
# latest release has the installers. BUILD_IMAGE lets a build behind a TLS-inspecting proxy use a Node image that
# trusts the proxy's certificate; the image that runs is always the official nginx one.
ARG BUILD_IMAGE=node:24.21.0-trixie-slim

FROM ${BUILD_IMAGE} AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ARG SITE_URL
ARG PUBLIC_DESKTOP_REPO
ENV PUBLIC_API_URL=/api ASTRO_TELEMETRY_DISABLED=1
RUN npm run build

FROM nginx:1.29.8-alpine
ADD https://www.cloudflare.com/ips-v4 https://www.cloudflare.com/ips-v6 /etc/nginx/cloudflare/
RUN awk 'NF { print "set_real_ip_from " $1 ";" }' /etc/nginx/cloudflare/ips-v4 /etc/nginx/cloudflare/ips-v6 > /etc/nginx/conf.d/cloudflare.conf \
 && test "$(wc -l < /etc/nginx/conf.d/cloudflare.conf)" -gt 5
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
RUN nginx -t
EXPOSE 8080
