# Lime Basket DS

Lime Basket is a (WIP) design system built with react and tailwindcss.

## Installation

Use the package manager [npm](https://npm.com) to install lime-basket-ds.

```bash
npm install lime-basket-ds
```

## Usage

```react
import { Button } from "lime-basket-ds";

const App = () => (<Button />);
```

Tailwind classes are prefixed with 'tw-' (E.g. tw-is-8). Keep in mind when
adding insets or spacing values in your code.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to
discuss what you would like to change.

## License

ISC

## Available helper classes list

Use them in classname component prop, applies to root element.

### Object
* tw-object-cover tw-object-contain 
### Height
* tw-h-5p tw-h-10p tw-h-20p tw-h-30p tw-h-40p
tw-h-50p tw-h-60p tw-h-80p tw-h-100p tw-h-120p tw-h-150p tw-h-200p tw-h-300p
tw-h-400p tw-h-500p tw-h-600p 
### Width
* tw-w-5p tw-w-10p tw-w-20p tw-w-30p tw-w-40p
tw-w-50p tw-w-60p tw-w-80p tw-w-100p tw-w-120p tw-w-150p tw-w-200p tw-w-300p
tw-w-400p tw-w-500p tw-w-600p tw-w-is-1 tw-w-is-2 tw-w-is-3 tw-w-is-4 tw-w-is-5
tw-w-is-6 tw-w-is-7 tw-w-is-8 tw-w-is-9 tw-w-is-10 tw-w-is-11 tw-w-is-12 
### Padding
* tw-p-0 tw-p-px tw-p-0.5 tw-p-1 tw-p-1.5 tw-p-2 tw-p-2.5 tw-p-3 tw-p-3.5 tw-p-4 tw-p-5
tw-p-6 tw-p-7 tw-p-8 tw-p-9 tw-py-0 tw-py-px tw-py-0.5 tw-py-1 tw-py-1.5 tw-py-2
tw-py-2.5 tw-py-3 tw-py-3.5 tw-py-4 tw-py-5 tw-py-6 tw-py-7 tw-py-8 tw-py-9 tw-px-0 tw-px-px tw-px-0.5 tw-px-1 tw-px-1.5 tw-px-2 tw-px-2.5 tw-px-3 tw-px-3.5
tw-px-4 tw-px-5 tw-px-6 tw-px-7 tw-px-8 tw-px-9 
### Margin
* tw-m-0 tw-m-mx tw-m-0.5 tw-m-1 tw-m-1.5 tw-m-2 tw-m-2.5 tw-m-3 tw-m-3.5 tw-m-4 tw-m-5 tw-m-6 tw-m-7 tw-m-8
tw-m-9 tw-my-0 tw-my-mx tw-my-0.5 tw-my-1 tw-my-1.5 tw-my-2 tw-my-2.5 tw-my-3
tw-my-3.5 tw-my-4 tw-my-5 tw-my-6 tw-my-7 tw-my-8 tw-my-9 tw-mx-0 tw-mx-mx
tw-mx-0.5 tw-mx-1 tw-mx-1.5 tw-mx-2 tw-mx-2.5 tw-mx-3 tw-mx-3.5 tw-mx-4 tw-mx-5
tw-mx-6 tw-mx-7 tw-mx-8 tw-mx-9 
### Full
* tw-h-full tw-max-w-full (responsive) tw-w-full (responsive)
### Color
tw-bg-lime (all primary colors) 
