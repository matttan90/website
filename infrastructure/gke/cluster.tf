#--------------------------------------------------------------------------------------------------
# GKE Cluster
#--------------------------------------------------------------------------------------------------

resource "google_container_cluster" "primary" {
  name     = "primary-cluster"
  location = var.gcp_region

  # We can't create a cluster with no node pool defined, but we want to only use
  # separately managed node pools. So we create the smallest possible default
  # node pool and immediately delete it.
  remove_default_node_pool = true
  initial_node_count       = 1

  master_auth {
    username = var.gke_username
    password = var.gke_password
    client_certificate_config {
      issue_client_certificate = false
    }
  }
}

resource "google_container_node_pool" "primary" {
  name       = "primary-node-pool"
  location   = var.gcp_region
  cluster    = google_container_cluster.primary.name
  node_count = 1

  node_config {
    machine_type = "n1-standard-1"
    metadata = {
      disable-legacy-endpoints = "true"
    }
    oauth_scopes = [
      "https://www.googleapis.com/auth/devstorage.read_only",
      "https://www.googleapis.com/auth/logging.write",
      "https://www.googleapis.com/auth/monitoring",
    ]
  }
}


#--------------------------------------------------------------------------------------------------
# Output for K8s
#--------------------------------------------------------------------------------------------------

output "client_certificate" {
  value     = google_container_cluster.primary.master_auth.0.client_certificate
  sensitive = true
}

output "client_key" {
  value     = google_container_cluster.primary.master_auth.0.client_key
  sensitive = true
}

output "cluster_ca_certificate" {
  value     = google_container_cluster.primary.master_auth.0.cluster_ca_certificate
  sensitive = true
}

output "host" {
  value     = google_container_cluster.primary.endpoint
  sensitive = true
}
