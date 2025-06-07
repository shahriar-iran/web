# Stage 1: Build the project
FROM node:18 AS builder

WORKDIR /web

# Install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .


# Build the application
RUN npm run build

# Stage 2: Production image
FROM node:18-alpine

WORKDIR /web

# Copy package.json and package-lock.json from the builder stage
COPY --from=builder /web/package.json /web/package-lock.json ./

# Install only production dependencies
RUN npm install --production --legacy-peer-deps

# Copy the build from the first stage
COPY --from=builder /web .

# Start the application
CMD ["npm", "start"]



# docker build -t web .
# docker run -d -p 3000:3000 web
