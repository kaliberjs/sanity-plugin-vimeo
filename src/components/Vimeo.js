import React from 'react';
import pluginConfig from 'config:@kaliber/sanity-plugin-multi-language'
// import { Vimeo } from 'vimeo'
import { Dialog, Card } from '@sanity/ui';

const { vimeoClientId, vimeoClientSecret, vimeoAccessToken, vimeoUserId } = pluginConfig
// const client = new Vimeo(vimeoClientId, vimeoClientSecret, vimeoAccessToken);

export function VimeoAssetSource({ onSelect, onClose }) {
  const handleSelect = useEvent(onSelect)
  // useCallback(() => {
  //   onSelect([
  //     {
  //       kind: 'url',
  //       value:
  //         'https://github.githubassets.com/images/modules/site/sponsors/logo-mona.svg',
  //       assetDocumentProps: {
  //         originalFilename: 'logo-mona.svg', // Use this filename when the asset is saved as a file by someone.
  //         source: {
  //           // The source this image is from
  //           name: 'github.githubassets.com',
  //           // A string that uniquely idenitfies it within the source.
  //           // In this example the URL is the closest thing we have as an actual ID.
  //           id: 'https://github.githubassets.com/images/modules/site/sponsors/logo-mona.svg',
  //         },
  //         description: 'Mona Lisa Octocat',
  //         creditLine: 'By Github.com',
  //       },
  //     },
  //   ]);
  // }, [onSelect]);

  const handleClose = useEvent(onClose)

  return (
    <Dialog
      id='vimeo-asset-source'
      header='Select a video from Vimeo'
      onClose={handleClose}
      width={4}
      open
    >
      <Card>
        <img
          src='https://github.githubassets.com/images/modules/site/sponsors/logo-mona.svg'
          onClick={handleSelect}
        />
      </Card>
    </Dialog>
  );
}

// client.request({
//   method: 'GET',
//   path: `/users/${vimeoUserId}/videos`
// }, (error, body, status_code, headers) => {
//   if (error) {
//     console.log('error');
//     console.log(error);
//   } else {
//     console.log('body');
//     console.log(body);
//   }

//   console.log('status code');
//   console.log(status_code);
//   console.log('headers');
//   console.log(headers);
// })

function useEvent(fn) {
  const fnRef = React.useRef(null)
  fnRef.current = fn

  return React.useCallback((...args) => fnRef.current(...args), [])
}
