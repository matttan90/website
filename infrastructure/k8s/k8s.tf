#--------------------------------------------------------------------------------------------------
# K8s Provider
#--------------------------------------------------------------------------------------------------

provider "kubernetes" {
  host                   = var.host
  username               = var.username
  password               = var.password
  client_certificate     = base64decode(var.client_certificate)
  client_key             = base64decode(var.client_key)
  cluster_ca_certificate = base64decode(var.cluster_ca_certificate)
}