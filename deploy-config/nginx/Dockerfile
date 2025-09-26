# Use official Nginx image
FROM nginx:1.27-alpine-slim

# Set working directory
WORKDIR /etc/nginx

# Install curl to fetch Cloudflare IPs dynamically
RUN apk add --no-cache curl

# Copy your local Nginx configuration files into the container
COPY /conf/default.conf /etc/nginx/nginx.conf

# Copy the startup script to dynamically update Cloudflare IPs
COPY /conf/fetchCloudflareIPs.sh /etc/nginx/fetch-cloudflare-ips.sh
RUN chmod +x /etc/nginx/fetch-cloudflare-ips.sh
RUN ls -l /etc/nginx/

RUN /bin/sh -c /etc/nginx/fetch-cloudflare-ips.sh

# Expose port 80
EXPOSE 80

# Set the entrypoint to start Nginx
CMD ["nginx", "-g", "daemon off;"]
