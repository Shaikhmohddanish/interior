$ErrorActionPreference = "Stop"

# Kitchen and Commercial Images
$imageDefinitions = @(
    # Kitchen Images
    @{
        Url = "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg"
        Path = "public\images\kitchen\modern-kitchen.jpg"
    },
    @{
        Url = "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg"
        Path = "public\images\kitchen\gourmet-kitchen.jpg"
    },
    @{
        Url = "https://images.pexels.com/photos/3935355/pexels-photo-3935355.jpeg"
        Path = "public\images\kitchen\open-plan-kitchen.jpg"
    },

    # Commercial Images
    @{
        Url = "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg"
        Path = "public\images\commercial\corporate-office.jpg"
    },
    @{
        Url = "https://images.pexels.com/photos/3701434/pexels-photo-3701434.jpeg"
        Path = "public\images\commercial\retail-space.jpg"
    }
)

# Download each image
foreach ($imageDef in $imageDefinitions) {
    Write-Host "Downloading $($imageDef.Url) to $($imageDef.Path)..."
    try {
        Invoke-WebRequest -Uri $imageDef.Url -OutFile $imageDef.Path
        Write-Host "Successfully downloaded $($imageDef.Path)" -ForegroundColor Green
    } catch {
        Write-Host "Failed to download $($imageDef.Path): $_" -ForegroundColor Red
    }
}

Write-Host "Kitchen and commercial images download completed!" -ForegroundColor Cyan
