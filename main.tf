# Define the Google provider
provider "google" {
  project     = var.project_id
  region      = var.region
}

# Create a Google Cloud Run service

resource "google_cloud_run_service" "nextjs_app" {
  name     = var.app_name
  location = var.region

  template {
    spec {
      containers {
        image = var.image_name
        ports {
          container_port = 3000
        }
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

# Allow unauthenticated access to the Cloud Run service
resource "google_cloud_run_service_iam_member" "allUsers" {
  service  = google_cloud_run_service.nextjs_app.name
  location = google_cloud_run_service.nextjs_app.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}

# Output the URL of the deployed service
output "url" {
  value = google_cloud_run_service.nextjs_app.status[0].url
}
