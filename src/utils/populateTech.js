import { langs, techs, others } from '../assets/data/techStack';

/**
 * A function to populate the 'techonologies' array for each project.
 * 
 * populateTech will recursively go through the 'items' array and push the corresponding 'copy' item into 'output' until there are no more elements inside 'items'.
 * @param {string[]} items REQUIRED - A list of items to populate the project's Tech Stack .
 * @param {Record<string, string | unknown>[] | undefined[]} output OPTIONAL - This value will be returned out and mutate the original value. If not provided, an empty array will be used as the initial value.
 * @param {Record<string, string | unknown>[]} copy OPTIONAL - A copy of all Tech Stack. The record can be found in '/src/assets/data/techStack.js'.
 * @returns {Record<string, string | unknown>[]} The 'output' param will be returned out. If 'output' was not provided, the function definition will need to be wrapped in a variable in order to get the returned value.
 */

export const populateTech = (
  items,
  output = [],
  copy = [...langs, ...techs, ...others]
) => {
  if (!items.length) return output;
  if (copy.length) {
    if (copy[0].name.toLowerCase() === items[0]) {
      output.push(copy[0]);
      copy.shift();
      items.shift();
    } else {
      copy.shift();
    }
    return populateTech(items, output, copy);
  }
};
