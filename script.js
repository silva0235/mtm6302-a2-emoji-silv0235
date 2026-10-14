// Create an array of emoji codes
const emojiCodes = [
  128512,
  128514,
  128517,
  128518,
  128521,
  128523,
  128526,
  128525,
  128536,
  129303,
  128564,
  128541
]

// Select the gallery
const $gallery = document.getElementById('gallery')

// Create a function to display emojis
function showEmojis(count = emojiCodes.length) {

  // Clear the existing gallery
  $gallery.innerHTML = ''

  // Loop through the first count emojis
  for (let index = 0; index < count; index++) {

    // Get the emoji code
    const code = emojiCodes[index]

    // Convert the code into an emoji
    const emoji = String.fromCodePoint(code)

    // Add the emoji card to the gallery
    $gallery.innerHTML += `
      <div class="emoji-card">
        <div class="emoji">${emoji}</div>
        <p class="emoji-code">${code}</p>
      </div>
    `
  }
}

// Display all emojis when the page loads
showEmojis()