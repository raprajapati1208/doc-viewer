import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Tabs,
  Tab,
  Grid,
  Box,
  Typography,
  Button,
  Dialog,
} from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import FileViewerCmp from './FileViewerCmp';
import DocViewerCmp from './DocViewerCmp';
import FileViewer from 'react-file-viewer';
import DocViewer, { DocViewerRenderers, MSDocRenderer } from 'react-doc-viewer';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const menuItems = [
  'react-doc-viewer PDF',
  'react-doc-viewer TXT',
  'react-file-viewer PDF',
  'react-file-viewer DOCX',
  'react-file-viewer XLXS',
];

const Navbar = () => {
  const [tabList, setTabList] = useState([
    {
      key: 0,
      id: 0,
      label: 'react-doc-viewer PDF',
    },
  ]);
  const [viewFile, setViewFile] = useState(false);

  const [tabValue, setTabValue] = useState(0);
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, value) => {
    setTabValue(value);
    let labels = Object.keys(tabList).map((val) => tabList[val].label);
    let label = labels[value];
    let index = menuItems.indexOf(label);
    setValue(index);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    let labels = Object.keys(tabList).map((val) => tabList[val].label);

    let tabId = labels.indexOf(menuItems[newValue]);
    if (tabId !== -1) {
      setTabValue(tabId);
    } else {
      addTab(newValue);
    }
  };

  const addTab = (value) => {
    let id = tabList[tabList.length - 1].id + 1;
    let labels = Object.keys(tabList).map((val) => tabList[val].label);
    let tabId = labels.indexOf(menuItems[value]);

    if (
      labels.indexOf(menuItems[value]) === -1 &&
      labels.length < menuItems.length
    ) {
      setTabList([...tabList, { key: id, id: id, label: menuItems[value] }]);
      setTabValue(tabList.length);
    } else {
      setTabValue(labels.indexOf(menuItems[value]));
    }
  };

  const deleteTab = (e) => {
    e.stopPropagation();
    let labels = Object.keys(tabList).map((val) => tabList[val].label);

    if (tabList.length === 1) {
      return;
    }
    let tabId = parseInt(e.currentTarget.id);
    let tabIDIndex = 0;

    let tabs = tabList.filter((value, index) => {
      if (value.id === tabId) {
        tabIDIndex = index;
      }
      return value.id !== tabId;
    });

    console.log('--- tabId  ---', tabId);
    let index = menuItems.indexOf(tabs[tabId - 1].label);

    tabs.map((item, index) => {
      item.key = index;
      item.id = index;
    });
    let currentValue = parseInt(tabValue);
    if (currentValue === tabId) {
      if (tabIDIndex === 0) {
        currentValue = tabList[tabIDIndex + 1].id;
      } else {
        currentValue = tabList[tabIDIndex - 1].id;
      }
    } else {
      if (currentValue > tabId) {
        currentValue = parseInt(tabValue) - 1;
        index = menuItems.indexOf(tabs[currentValue].label);
      }
    }
    setTabValue(currentValue);
    setValue(index);
    setTabList(tabs);
  };

  return (
    <>
      <AppBar position="static">
        <Grid container alignItems="center" justify="center">
          <Grid item xl={11} lg={11} md={11} sm={11} xs={11}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              style={{ paddingLeft: 276 }}
            >
              {tabList.map((tab) => (
                <Tab
                  key={tab.key.toString()}
                  value={tab.id}
                  label={tab.label}
                  icon={tab.id > 0 && <Close id={tab.id} onClick={deleteTab} />}
                  className="mytab"
                  style={{ color: 'yellow' }}
                />
              ))}
            </Tabs>
          </Grid>
          <Grid item xl={11} lg={11} md={11} sm={11} xs={11}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
            >
              {menuItems.map((tab, i) => (
                <Tab
                  key={i}
                  value={i}
                  label={menuItems[i]}
                  className="mytab"
                  style={{ color: 'yellow' }}
                />
              ))}
            </Tabs>
          </Grid>
        </Grid>
      </AppBar>
      <TabPanel value={value} index={0}>
        <DocViewerCmp />
        <DocViewer
          documents={[
            {
              uri: './CSS-Handbook.pdf',
            },
          ]}
          //pluginRenderers={[MSDocRenderer]}
          pluginRenderers={DocViewerRenderers}
          style={{ maxHeight: 500 }}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DocViewer
          documents={[
            {
              uri: './text-type.txt',
            },
          ]}
          //pluginRenderers={[MSDocRenderer]}
          pluginRenderers={DocViewerRenderers}
          style={{ maxHeight: 500 }}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <>
          <div>
            <Button
              onClick={() => {
                viewFile ? setViewFile(false) : setViewFile(true);
              }}
            >
              Toggle pdf
            </Button>
          </div>
          <div>
            {viewFile && (
              <>
                <FileViewer
                  fileType={'pdf'}
                  filePath={'./doc.pdf'}
                  errorComponent={<div>Error</div>}
                  onError={() => {
                    console.log('error');
                  }}
                />
              </>
            )}
          </div>
        </>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <>
          <div>
            <Button
              onClick={() => {
                viewFile ? setViewFile(false) : setViewFile(true);
              }}
            >
              Show docx
            </Button>
          </div>
          <Dialog
            onClose={() => {
              setViewFile(false);
            }}
            aria-labelledby="simple-dialog-title"
            open={viewFile}
          >
            <div>
              <>
                <FileViewer
                  fileType={'docx'}
                  filePath={'./ticket-registration-form.docx'}
                  errorComponent={<div>Error</div>}
                  onError={() => {
                    console.log('error');
                  }}
                />
              </>
            </div>
          </Dialog>
        </>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <>
          <div>
            <Button
              onClick={() => {
                viewFile ? setViewFile(false) : setViewFile(true);
              }}
            >
              Toggle xlsx
            </Button>
          </div>
          <div>
            {viewFile && (
              <>
                <FileViewer
                  fileType={'xlsx'}
                  filePath={'./test-xls.xlsx'}
                  errorComponent={<div>Error</div>}
                  onError={() => {
                    console.log('error');
                  }}
                />
              </>
            )}
          </div>
        </>
      </TabPanel>
      <TabPanel value={value} index={5}></TabPanel>
      <TabPanel value={value} index={6}></TabPanel>
    </>
  );
};

export default Navbar;
