const fs = require('fs')
const path = require('path')

// Source: the uploaded photo in the app data directory
const sourcePhoto = process.argv[2] // Pass source path as argument

if (!sourcePhoto) {
  console.log('Usage: node setup-photo.js <source-photo-path>')
  console.log('Example: node setup-photo.js "C:\\Users\\khayy\\.gemini\\antigravity\\brain\\2e83d7ab-69d0-4d4e-91be-6835c784a7c8\\media__1782657561436.jpg"')
  process.exit(1)
}

const destPath = path.join(__dirname, 'public', 'profile.jpg')

try {
  fs.copyFileSync(sourcePhoto, destPath)
  console.log('✅ Profile photo copied successfully to public/profile.jpg')
} catch (err) {
  console.error('❌ Error copying photo:', err.message)
}
