# Tabs Attributes

## type
description: now tabs has only one type: border-card
type: string
default: border-card

## tabPosition
description: determined the position of tab-nav
type: string
accepted: top/left/bottom/right
default: top

# Events

## click
parameters: labels, names, index

# Tab-pane Attributes

## label
description: label will show on tab-nav
type: string
required

## name
description: it should be unique among tab-panes
type: string
required
unique
