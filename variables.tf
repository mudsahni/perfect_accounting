variable "project_id" {
  description = "The ID of the Google Cloud project"
}

variable "region" {
  description = "The region to deploy the service"
}

variable "app_name" {
  description = "The name of the Cloud Run service"
}

variable "image_name" {
  description = "The name of the container image"
}

variable "image_tag" {
  description = "The tag of the container image"
  default     = "latest"
}