# Claude Code Configuration

This directory contains configuration and custom commands for Claude Code.

## Directory Structure

- `commands/` - Custom slash commands for this project
- `settings.json` - Project-specific Claude Code settings (optional)

## Getting Started

### Custom Slash Commands

Create markdown files in the `commands/` directory to define custom slash commands.
Each file should be named `command-name.md` and contain the prompt you want Claude to execute.

Example: `.claude/commands/deploy.md`
```markdown
Deploy the Hugo site to production. Build the site first with `hugo`, then push to the main branch.
```

Then use it with: `/deploy`

### Settings

You can customize Claude Code behavior by creating a `settings.json` file in this directory.

## Learn More

- [Claude Code Documentation](https://github.com/anthropics/claude-code)
- Run `/help` in Claude Code for more information
