
/**
 * Returns the location of the image files
 * @param image
 * @returns {*}
 */
const getImageContent = (image):string => {
    return require("../images/" + image);
};

/**
 * Get the content of the image files
 * @param imageName
 * @returns {string}
 */
export const imageLocalCall = (imageName:string) => {
    if (imageName.startsWith("file:") || imageName.startsWith("app:")) {
        return imageName; 
    }
    let res = getImageContent(imageName);
    // if (!res.startsWith("data")) {
    //     res = window.location.origin + res;
    // }
    return res;
};
