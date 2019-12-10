#--------------------------------------------------------------------------------------------------
# Main Variables
#--------------------------------------------------------------------------------------------------
variable "gcp_project" {}
variable "gcp_region" {}
variable "gke_username" {}
variable "gke_password" {}

#--------------------------------------------------------------------------------------------------
# Modules
#--------------------------------------------------------------------------------------------------
module "gke" {
  source = "./gke"

  # pass main variables as specific module variables
  gcp_project  = var.gcp_project
  gcp_region   = var.gcp_region
  gke_username = var.gke_username
  gke_password = var.gke_password
}

module "vpc" {
  source = "./vpc"

  # pass main variables as specific module variables
  gcp_project = var.gcp_project
  gcp_region  = var.gcp_region
}

module "k8s" {
  source   = "./k8s"

  # pass main variables and other module outputs as specific module variables
  host     = module.gke.host
  username = var.gke_username
  password = var.gke_password
  client_certificate     = module.gke.client_certificate
  client_key             = module.gke.client_key
  cluster_ca_certificate = module.gke.cluster_ca_certificate
  static_ip_address      = module.vpc.static_ip_address
}
