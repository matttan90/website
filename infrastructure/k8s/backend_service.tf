#--------------------------------------------------------------------------------------------------
# K8s Flask Backend Pods
#--------------------------------------------------------------------------------------------------

resource "kubernetes_deployment" "flask-backend" {
  metadata {
    name = "flask-backend"
    labels = {
      app = "flask-backend"
    }
  }

  spec {
    replicas = 1
    selector {
      match_labels = {
        app = "flask-backend"
      }
    }
    template {
      metadata {
        labels = {
          app = "flask-backend"
        }
      }
      spec {
        container {
          image = "gcr.io/host-website-261608/backend:latest"
          name  = "flask-backend-container"

          resources {
            limits {
              cpu    = "0.5"
              memory = "512Mi"
            }
            requests {
              cpu    = "250m"
              memory = "50Mi"
            }
          }
        }
      }
    }
  }
}

#--------------------------------------------------------------------------------------------------
# K8s Flask Backend Service
#--------------------------------------------------------------------------------------------------

resource "kubernetes_service" "flask-backend" {
  metadata {
    name = "flask-backend"
  }
  spec {
    selector = {
      app = kubernetes_deployment.flask-backend.metadata.0.labels.app
    }
    port {
      port        = 8000
      target_port = 8000
    }
  }
}
