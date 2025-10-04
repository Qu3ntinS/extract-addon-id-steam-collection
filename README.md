# Steam Collection Addon ID Extractor

A Node.js script that extracts Steam Workshop addon IDs from a Steam collection and outputs them in a format that can be used for Garry's Mod servers.

## How it works

The script:

1. Connects to the Steam API
2. Downloads the details of a Steam collection
3. Extracts all workshop IDs from the collection
4. Generates an `addons.txt` file with `resource.AddWorkshop()` commands

## Installation

1. Make sure Node.js is installed
2. Install the dependencies:

```bash
npm install
```

## Usage

1. Open `script.js` in a text editor
2. Replace `"collection-id-here"` with the actual Steam collection ID
3. Run the script:

```bash
node script.js
```

## Finding the Steam Collection ID

You can find the collection ID in the URL of a Steam collection:

```
https://steamcommunity.com/sharedfiles/filedetails/?id=123456789
```

In this example, `123456789` would be the collection ID.

## Output

The script creates an `addons.txt` file with the following format:

```
resource.AddWorkshop(106404821)
resource.AddWorkshop(110656185)
resource.AddWorkshop(118623480)
...
```

This file can be used directly in your Garry's Mod server.

## Dependencies

- **axios**: For HTTP requests to the Steam API
- **fs**: Node.js built-in filesystem module

## Error Handling

The script handles download errors and displays appropriate error messages.

## Example

After running the script with a valid collection ID, you'll get output like:

```
Ready! 492 Addons saved in addons.txt.
```

The generated `addons.txt` file contains all workshop IDs from the collection in the correct format for Garry's Mod.
