# lub-dub

## Installation

Install Node.js and run `npm install -g lub-dub`.

## Usage

Run `lub-dub <uuid>`. Example:

    $ lub-dub da53284303a740b68702ceb6259ebf3f
    63
    64,859.375,869.140625
    65,847.65625
    64,1065.4296875
    63,1081.0546875
    63,1005.859375
    62,977.5390625
    62,993.1640625
    62,982.421875
    62,952.1484375
    62,801.7578125
    63,833.0078125

The first number on each line is bpm, the rest are the RR intervals (in milliseconds, resolution 1/1024 s) measured between the last and current transmissions.

Tested with Polar H7.

## Removal

Run `npm remove -g lub-dub`.

## Development

To install dependencies, `npm install`. To compile, `npm run build`. To link, `npm link`. To run, `lub-dub`.
