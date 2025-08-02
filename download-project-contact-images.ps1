$ErrorActionPreference = "Stop"

# Project and Contact Images
$imageDefinitions = @(
    # Project hero banner
    @{
        Url = "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        Path = "public\images\project\hero-banner.jpg"
    },
    
    # Contact page image
    @{
        Url = "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        Path = "public\images\contact\contact-image.jpg"
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

Write-Host "Project and contact images download completed!" -ForegroundColor Cyan
