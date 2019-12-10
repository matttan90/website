# Infrastructure

This sub-repository declares the infrastructure used to host the servers. This includes:
- `gke`, the kubernetes cluster (hosted in GCP)
- `k8s`, the kubernetes service deployments

---
# Prerequisites

The infrastructure is deployed using terraform onto GCP. This requires:
- terraform CLI installed
- service-account credentials created in GCP (to be used by terraform)
