/**
 * @author Enlixe#3991
 * @license GPL-3.0
*/

module.exports = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');