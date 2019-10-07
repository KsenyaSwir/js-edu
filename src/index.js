/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family',
    knowsProgramming = true,
    config = { family: 4 }
) {
    let hours = 0;

    for (let key in config) {
        if (key == focus) {
            let hourWeek = config[key];

            if (knowsProgramming == true) {
                hours = 800 / hourWeek;
            } else {
                hours = 1300 / hourWeek;
            }
            hours = Math.ceil(hours);
        }
    }
    return hours;
};