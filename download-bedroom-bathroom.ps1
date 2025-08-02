$ErrorActionPreference = "Stop"

# Bedroom and Bathroom Images
$imageDefinitions = @(
    # Bedroom Images
    @{
        Url = "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg"
        Path = "public\images\bedroom\serene-bedroom.jpg"
    },
    @{
        Url = "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg"
        Path = "public\images\bedroom\master-bedroom-suite.jpg"
    },
    @{
        Url = "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg"
        Path = "public\images\bedroom\guest-bedroom.jpg"
    },

    # Bathroom Images
    @{
        Url = "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg"
        Path = "public\images\bathroom\luxury-bathroom.jpg"
    },
    @{
        Url = "https://images.pexels.com/photos/6301168/pexels-photo-6301168.jpeg"
        Path = "public\images\bathroom\spa-like-bathroom.jpg"
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

Write-Host "Bedroom and bathroom images download completed!" -ForegroundColor Cyan
