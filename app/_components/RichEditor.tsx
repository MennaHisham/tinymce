'use client';

import dynamic from 'next/dynamic';
import BundledEditor from './tinymce/BundledEditor';

const RichEditor = () => {
  return (
    <>
      <BundledEditor />
    </>
  );
};

export default dynamic(() => Promise.resolve(RichEditor), {
  ssr: false,
});
