# configure aws.
# export vars like this: `export TF_VAR_aws_key=...`, best w/ direnv
variable "aws_key" {
    type = "string"
}
variable "aws_secret" {
    type = "string"
}

provider "aws" {
    access_key = "${var.aws_key}"
    secret_key = "${var.aws_secret}"
    region = "eu-central-1"
}

resource "aws_s3_bucket" "main" {
    bucket = "lb.arcanio.com"
    acl = "public-read"
    force_destroy = true
    policy = "${file("policy.json")}"
    website {
        index_document = "index.html"
        error_document = "index.html"
    }
}

resource "aws_route53_record" "main" {
  zone_id = "ZVIXYF30R76V5"
  name = "lb.arcanio.com"
  type = "CNAME"
  ttl = "300"
  records = ["${aws_s3_bucket.main.website_endpoint}"]
}
