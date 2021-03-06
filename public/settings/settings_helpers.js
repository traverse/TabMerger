/*
TabMerger as the name implies merges your tabs into one location to save
memory usage and increase your productivity.

Copyright (C) 2021  Lior Bragilevsky

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

If you have any questions, comments, or concerns you can contact the
TabMerger team at <https://lbragile.github.io/TabMerger-Extension/contact/>
*/

/**
 * @module __Script/Settings_helpers
 */

/**
 * On different browsers, this generates the corresponding link to the browser's webstore
 * where TabMerger can be downloaded.
 */
export function setTabMergerLink() {
  var link;
  // var isOpera = navigator.userAgent.indexOf(" OPR/") >= 0;
  var isFirefox = typeof InstallTrigger !== "undefined";
  var isIE = /*@cc_on!@*/ false || !!document.documentMode;
  var isEdge = !isIE && !!window.StyleMedia;
  var isChrome = !!window.chrome && !!window.chrome.runtime;
  var isEdgeChromium = isChrome && navigator.userAgent.indexOf("Edg") !== -1;

  if (isIE || isEdge || isEdgeChromium) {
    link = "https://microsoftedge.microsoft.com/addons/detail/tabmerger/eogjdfjemlgmbblgkjlcgdehbeoodbfn";
  } else if (isFirefox) {
    link = "https://addons.mozilla.org/en-CA/firefox/addon/tabmerger";
  } else if (isChrome) {
    link = "https://chrome.google.com/webstore/detail/tabmerger/inmiajapbpafmhjleiebcamfhkfnlgoc";
  }

  document.getElementById("logo-img").parentNode.href = link;
}

/**
 * Sets the settings item in sync storage according to the current configuration in TabMerger
 */
export function setSync() {
  var color = document.getElementById("options-default-color").value;
  var title = document.getElementById("options-default-title").value;
  var restore = document.querySelector("input[name='restore-tabs']:checked").value;
  var open = document.querySelector("input[name='ext-open']:checked").value;
  var blacklist = document.getElementById("options-blacklist").value;
  var dark = document.getElementById("darkMode").checked;

  var store_val = { open, color, title, restore, blacklist, dark };
  chrome.storage.sync.set({ settings: store_val }, () => {});
}
