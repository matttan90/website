#--------------------------------------------------------------------------------------------------
# K8s React Pods
#--------------------------------------------------------------------------------------------------

resource "kubernetes_deployment" "react-frontend" {
  metadata {
    name = "react-frontend"
    labels = {
      app = "react-frontend"
    }
  }

  spec {
    replicas = 1
    selector {
      match_labels = {
        app = "react-frontend"
      }
    }
    template {
      metadata {
        labels = {
          app = "react-frontend"
        }
      }
      spec {
        container {
          image = "gcr.io/host-website-261608/sample:prod"
          name  = "react-frontend-container"

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
# K8s React Service
#--------------------------------------------------------------------------------------------------

resource "kubernetes_service" "react-frontend" {
  metadata {
    name = "react-frontend"
  }
  spec {
    selector = {
      app = kubernetes_deployment.react-frontend.metadata.0.labels.app
    }
    port {
      port        = 80
      target_port = 80
    }
    type = "LoadBalancer"
    load_balancer_ip = var.static_ip_address
  }
}
