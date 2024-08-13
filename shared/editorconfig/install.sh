#!/bin/bash

# Get the directory where the script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Define the path to the .editorconfig file
EDITORCONFIG_FILE="$SCRIPT_DIR/.editorconfig"

# Define the target path five directories above
TARGET_DIR="$SCRIPT_DIR/../../"

# Create the symbolic link
ln -s "$EDITORCONFIG_FILE" "${TARGET_DIR}.editorconfig"

echo "Symbolic link created at ${TARGET_DIR}.editorconfig"
