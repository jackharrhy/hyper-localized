# TODO setup env for cloudflare account id
# TODO setup auto aws configure

upload-files-to-r2:
    aws s3 cp --endpoint-url https://CLOUDFLARE_ACCOUNT_ID.r2.cloudflarestorage.com ./file s/ s3://hyper-localized/ --recursive
