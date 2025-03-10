# @kimhongyeon/use-stable-prevent-zoom

This React hook is designed to address the issue of automatic zoom-in when focusing on input fields within iOS browsers or webviews. It is zero dependency and adopts the method of controlling the viewport instead of adjusting the font size to 16px or more, as adjusting the font size may not allow for design intent.

The hook prevents zooming through the viewport when touch starts and restores the original viewport on blur, ensuring stability. It is compatible with both Next.js App Router and Page Router. In the case of the Next.js App Router, the viewport may disappear and reappear at will, but it works well even if this phenomenon occurs.

## Installation

```bash
npm install @kimhongyeon/use-stable-prevent-zoom
```
Or
```bash
yarn add @kimhongyeon/use-stable-prevent-zoom
```

## Usage
```jsx
import React, { useState } from 'react';
import { useStablePreventZoom } from '@kimhongyeon/use-stable-prevent-zoom';

const App = () => {
  useStablePreventZoom(isLocked);
  
  return <>...</>;
};

export default App;
```

## Usage - Next.js App Router (app/layout.tsx)
```tsx
'use client'; // It must be a client component. If you are using RootLayout as a server component, you need to create a separate client component and include it in the RootLayout.

import React, { useState } from 'react';
import { useStablePreventZoom } from '@kimhongyeon/use-stable-prevent-zoom';

const RootLayout = () => {
  useStablePreventZoom();

  return <html>...</html>;
};

export default RootLayout;
```

## Usage - Next.js Page Router (pages/_app.tsx)
```tsx
import React, { useState } from 'react';
import { useStablePreventZoom } from '@kimhongyeon/use-stable-prevent-zoom';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useStablePreventZoom();

  return (
    <Component {...pageProps} />
  );
};

export default MyApp;
```

## Contributing
Please submit bug reports and feature requests through the [issue tracker](https://github.com/kimhongyeon/use-stable-prevent-zoom/issues).  

## License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/kimhongyeon/use-stable-prevent-zoom/LICENSE) file for details.
