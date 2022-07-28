export default {
// convert base64 to blob URL
  base64toBlob: (base64) => {
	const binStr = window.atob(base64);
	const uint8Array = Uint8Array.from(binStr, (x) => x.charCodeAt(0));
	const buff = uint8Array.buffer;
	const blobURL = window.URL.createObjectURL(new Blob([buff]));
	return blobURL;
  },
};
