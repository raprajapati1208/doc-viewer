import React from 'react';

import FileViewer from 'react-file-viewer';

const FileViewerCmp = () => {
  const file = './logo192.png';
  //let index = file.lastIndexOf('.');
  const type = 'png';
  const file1 = './pdf-type.pdf';
  const type1 = 'pdf';
  const file2 = './photo.jpeg';
  const type2 = 'jpeg';
  //const file3 = './Dynamic_tabs.pdf';
  //const type3 = 'pdf';
  //const file4 = './Dynamic_tabs_text.txt';
  const file4 = './text-type.txt';
  const type4 = 'txt';
  //const file5 = './Dynamic_tab.docx';
  const file5 = './docx-type.docx';
  const type5 = 'docx';
  const file6 = './Ppt_File.pptx';
  const type6 = 'pptx';
  const file7 = './doc-type.doc';
  const type7 = 'doc';
  const file8 = './Ppt_File.ppt';
  const type8 = 'ppt';
  const file9 = './test-xls.xls';
  const type9 = 'xls';
  const file10 = './test-xls.xlsx';
  const type10 = 'xlsx';
  //let type = file.substr(index + 1);

  return (
    <>
      <div>
        <div>
          <br />
          react-file-viewer
          <br />
          <br />
          <div>
            <br />
            PNG FILE
            <br />
            <FileViewer
              fileType={type}
              filePath={file}
              errorComponent={<div>Error</div>}
              onError={() => {
                console.log('error');
              }}
            />
          </div>
          <br />
          <div>
            <br />
            JPEG FILE
            <br />
            <FileViewer
              fileType={type2}
              filePath={file2}
              errorComponent={<div>Error</div>}
              onError={() => {
                console.log('error');
              }}
            />
          </div>
          <br />
          <div>
            <br />
            PDF FILE
            <br />
            <FileViewer
              fileType={type1}
              filePath={file1}
              errorComponent={<div>Error</div>}
              onError={() => {
                console.log('error');
              }}
            />
          </div>
          <br />
          <div>
            <br />
            XLSX FILE
            <br />
            <FileViewer
              fileType={type10}
              filePath={file10}
              errorComponent={<div>Error</div>}
              onError={() => {
                console.log('error');
              }}
            />
          </div>
          <br />
          <div>
            <br />
            DOCX FILE
            <br />
            <FileViewer
              fileType={type5}
              filePath={file5}
              errorComponent={<div>Error</div>}
              onError={() => {
                console.log('error');
              }}
            />
          </div>
          <br />
          DOC FILE
          <br />
          <FileViewer
            fileType={type7}
            filePath={file7}
            errorComponent={<div>Error</div>}
            onError={() => {
              console.log('error');
            }}
          />
        </div>
        <br />
        <div>
          <br />
          PPT FILE
          <br />
          <FileViewer
            fileType={type8}
            filePath={file8}
            errorComponent={<div>Error</div>}
            onError={() => {
              console.log('error');
            }}
          />
        </div>
        <br />
        <div>
          <br />
          XLS FILE
          <br />
          <FileViewer
            fileType={type9}
            filePath={file9}
            errorComponent={<div>Error</div>}
            onError={() => {
              console.log('error');
            }}
          />
        </div>
        <br />
        <div>
          <br />
          TXT FILE
          <br />
          <FileViewer
            fileType={type4}
            filePath={file4}
            errorComponent={<div>Error</div>}
            onError={() => {
              console.log('error');
            }}
          />
        </div>
        <br />
        <div>
          <br />
          TXT FILE
          <br />
          <FileViewer
            fileType={type4}
            filePath={file4}
            errorComponent={<div>Error</div>}
            onError={() => {
              console.log('error');
            }}
          />
        </div>
        <br />

        <div>
          <br />
          PPTX FILE
          <br />
          <FileViewer
            fileType={type6}
            filePath={file6}
            errorComponent={<div>Error</div>}
            onError={() => {
              console.log('error');
            }}
          />
        </div>
      </div>
    </>
  );
};

export default FileViewerCmp;
