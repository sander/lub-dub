# lub-dub

## Installation

Install Node.js and run `npm install -g lub-dub`.

## Usage

Run `lub-dub <uuid>`. Example:

    $ lub-dub da53284303a740b68702ceb6259ebf3f
    65
    65,912
    64,1036
    63,1065
    63,1032
    64,895
    64,983
    65,952,890
    65,941
    66,812

The first number on each line is bpm, the rest are the RR intervals (unit is 1/1024 s) measured between the last and current transmissions.

Tested with Polar H7.

## Removal

Run `npm remove -g lub-dub`.

## Development

To install dependencies, `npm install`. To compile, `npm run build`. To link, `npm link`. To run, `lub-dub`.
