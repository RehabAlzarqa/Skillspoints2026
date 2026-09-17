# Use Node.js official image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install -g ts-node typescript

RUN npm install

# Copy all files
COPY . .

# prisma generate

RUN npx prisma generate
# Build Next.js app

RUN npm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
