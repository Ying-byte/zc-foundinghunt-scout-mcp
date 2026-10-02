#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "foundinghunt",
  boardId: "foundinghunt-official",
  domain: "foundinghunt.com",
  npmName: "zc-foundinghunt-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
