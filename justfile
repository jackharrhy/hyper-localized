set dotenv-load

# TODO setup auto aws configure

upload-files-to-r2:
    aws s3 cp --endpoint-url "https://$CLOUDFLARE_ACCOUNT_ID.r2.cloudflarestorage.com" ./files/ s3://hyper-localized/ --recursive

process-images:
    ./scripts/process-images.fish
