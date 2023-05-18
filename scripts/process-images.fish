#!/usr/bin/env fish

set root_directory "files/"

set -l image_files (find $root_directory -name 'original.*[jpg|png]')

for image_file in $image_files
    set -l extension (echo $image_file | sed 's/.*\.//')
    set -l thumbnail_file (echo $image_file | sed "s/original\.$extension/thumbnail\.$extension/")
    set -l highres_file (echo $image_file | sed "s/original\.$extension/highres\.$extension/")
    convert -resize 600x600 $image_file $thumbnail_file
    convert -resize 1200x1200 $image_file $highres_file
end
