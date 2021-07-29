import React, { useState } from 'react';

import DocViewer, { DocViewerRenderers, MSDocRenderer } from 'react-doc-viewer';

import file from './Ppt_File.ppt';
import file2 from './test-xls.xls';
import file3 from './text-type.txt';
import file4 from './doc-type.doc';
import file5 from './Dynamic_tabs.pdf';
import file6 from './Ppt_File.pptx';
import file7 from './test-xls.xlsx';
import file8 from './termsandconditionstemplate.docx';

const MyCustomPNGRenderer = ({ mainState: { currentDocument } }) => {
  if (!currentDocument) return null;

  return (
    <div id="my-png-renderer">
      <img id="png-img" src={currentDocument.fileData} />
    </div>
  );
};

MyCustomPNGRenderer.fileTypes = ['png', 'image/png'];
MyCustomPNGRenderer.weight = 1;

const MyCustomDOCRenderer = ({ mainState: { currentDocument } }) => {
  if (!currentDocument) return null;

  return <div id="my-doc-renderer">{currentDocument.fileData}</div>;
};

MyCustomDOCRenderer.fileTypes = ['doc'];
MyCustomDOCRenderer.weight = 1;

const DocViewerCmp = () => {
  const [files, setFiles] = useState([
    {
      //uri: 'https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf',
      //uri: './favicon-32x32.png',
    },
  ]);
  const docs = [
    {
      uri: 'https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf',
    },
    //{ uri: require('./test-xls.xls') },
    //{ uri: require('./test-xls.xlsx') },
    //{ uri: require('./doc-type.doc') },
    //{ uri: require('./termsandconditionstemplate.docx') },
    //{ uri: require('./Ppt_File.ppt') },
    //{ uri: require('./Ppt_File.pptx') },
    { uri: file },
    { uri: file2 },
    { uri: file3 },
    { uri: file4 },
    { uri: file5 },
    { uri: file6 },
    { uri: file7 },
    { uri: file8 },
  ];
  const docss = [
    //{ uri: '../public/doc.pdf' },
    //{ uri: '../public/favicon-32x32.png' },
    {
      uri: 'http://www.cnscbt.ro/index.php/liste-zone-afectate-covid-19/2588-lista-state-cu-risc-epidemiologic-ridicat-din-22-07-2021/file',
    },
    /*{
      uri: 'https://www.slideshare.net/slidecomet/5-storytelling-lessons-from-superhero-stories',
    },*/
    { uri: './favicon-32x32.png' },
    { uri: './pdf-type.pdf' },
    { uri: './Dynamic_tabs.pdf' },
    { uri: './text-type.txt' },
    { uri: './Dynamic_tabs_text.txt' },
    {
      uri: 'https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf',
    },
    //{ uri: require('./docx-type.docx') },
    {
      uri: '/Users/titianadinu/work-data/MK_staging/explore_apps/dynamic_tabs/src/docx-type.docx',
    },
    { uri: './doc-type.doc' },
    { uri: './docx-type.docx' },
    { uri: './Dynamic_tabs.docx' },
    { uri: './Ppt_File.ppt' },
    //https://queue.nyc3.cdn.digitaloceanspaces.com/lkfjslkdfj.pptx
    { uri: './Ppt_File.pptx' },
    { uri: './test-xls.xls' },
    { uri: './test-xls.xlsx' },
    //{ uri: require('./favicon-32x32.png') },
  ];

  return (
    <>
      <div>
        <DocViewer
          pluginRenderers={[MyCustomPNGRenderer]}
          documents={[{ uri: './favicon-32x32.png' }]}
        />
        <DocViewer
          pluginRenderers={[MyCustomDOCRenderer]}
          documents={[{ uri: './doc-type.doc' }]}
          config={{
            header: {
              disableHeader: false,
              disableFileName: false,
              retainURLParams: false,
            },
          }}
        />

        <DocViewer
          documents={[
            {
              uri: 'http://www.orimi.com/pdf-test.pdf',
            },
          ]}
          pluginRenderers={[MSDocRenderer]}
          style={{ maxHeight: 500 }}
        />
        <DocViewer
          documents={[
            {
              uri: './ticket-registration-form.docx',
            },
          ]}
          //pluginRenderers={[MSDocRenderer]}
          pluginRenderers={DocViewerRenderers}
          style={{ maxHeight: 500 }}
        />
        <DocViewer
          documents={docs}
          pluginRenderers={DocViewerRenderers}
          style={{ maxHeight: 500 }}
          config={{
            header: {
              disableHeader: false,
              disableFileName: false,
              retainURLParams: false,
            },
          }}
        />
        {/*
        <DocViewer
          pluginRenderers={[MyCustomPNGRenderer]}
          documents={[{ uri: './favicon-32x32.png' }]}
        />
        <DocViewer
          documents={docs}
          pluginRenderers={DocViewerRenderers}
          style={{ maxHeight: 500 }}
        />*/}
      </div>
    </>
  );
};

export default DocViewerCmp;
