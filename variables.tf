# variables.tf

variable "project_id" {
  description = "perfect-accounting"
}

variable "region" {
  description = "GCP region"
  default     = "us-central1"
}

variable "app_name" {
  description = "Name of your Next.js app"
  default     = "perfect-accounting-nextjs-app"
}

variable "image_name" {
  description = "Name of the Docker image"
  default     = "perfect-accounting-nextjs-app-image"
}

variable "image_tag" {
  description = "The tag of the container image"
  default     = "latest"
}