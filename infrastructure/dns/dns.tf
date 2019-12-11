#--------------------------------------------------------------------------------------------------
# Google Cloud DNS Zone
#--------------------------------------------------------------------------------------------------

resource "google_dns_managed_zone" "website-zone" {
  name        = "website"
  dns_name    = "matttan90.com."
  description = "Website DNS zone"
  visibility  = "public"
}

#--------------------------------------------------------------------------------------------------
# Google Cloud DNS Records
#--------------------------------------------------------------------------------------------------

resource "google_dns_record_set" "frontend-a" {
  # zone
  managed_zone = google_dns_managed_zone.website-zone.name
  # record
  name = google_dns_managed_zone.website-zone.dns_name
  type = "A"
  ttl  = 300
  # static ip of frontend load balancer
  rrdatas = [var.static_ip_address]
}


resource "google_dns_record_set" "frontend-cname" {
  # zone
  managed_zone = google_dns_managed_zone.website-zone.name
  # record
  name = "www.${google_dns_managed_zone.website-zone.dns_name}"
  type = "CNAME"
  ttl  = 300
  rrdatas = [google_dns_managed_zone.website-zone.dns_name]
}
