# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Chrome extension that modifies keyboard behavior on AI chat platforms:
- Prevents accidental message sending when pressing Enter alone
- Enables sending messages with Command+Enter (Mac) / Ctrl+Enter

Supported sites: Perplexity, ChatGPT, Claude, Gemini

## Architecture

Manifest V3 Chrome extension with site-specific content scripts:
- `manifest.json` - Extension configuration with URL patterns for each supported site
- `content-perplexity.js` - Perplexity.ai handler (button click via aria-label)
- `content-chatgpt.js` - ChatGPT handler (dispatches Meta+Enter event)
- `content-claude.js` - Claude.ai handler (button click via aria-label)
- `content-gemini.js` - Gemini handler (button click via aria-label)

Each content script uses event capturing (`true` parameter) to intercept Enter key presses before the site's native handlers.

## Adding New Sites

1. Create `content-{sitename}.js` with site-specific selectors
2. Add URL pattern and script reference to `manifest.json`
3. Test locally before committing

## Local Testing

1. Open Chrome and navigate to `chrome://extensions`
2. Enable "Developer mode" (top right)
3. Click "Load unpacked" and select this project directory
4. Visit each supported site to test the extension
