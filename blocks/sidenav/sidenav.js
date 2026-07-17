import { migrateTree } from "../utils.js";
const treeData = [{"displayName":"topic_036","url":"contents/large-fileset/topic-036"},{"displayName":"topic_050","url":"contents/large-fileset/topic-050"},{"displayName":"topic_048","url":"contents/large-fileset/topic-048"},{"displayName":"topic_046","url":"contents/large-fileset/topic-046"},{"displayName":"topic_044","url":"contents/large-fileset/topic-044"},{"displayName":"topic_042","url":"contents/large-fileset/topic-042"},{"displayName":"topic_040","url":"contents/large-fileset/topic-040"},{"displayName":"topic_038","url":"contents/large-fileset/topic-038"},{"displayName":"topic_034","url":"contents/large-fileset/topic-034"},{"displayName":"topic_032","url":"contents/large-fileset/topic-032"},{"displayName":"topic_030","url":"contents/large-fileset/topic-030"},{"displayName":"topic_028","url":"contents/large-fileset/topic-028"},{"displayName":"topic_026","url":"contents/large-fileset/topic-026"},{"displayName":"topic_049","url":"contents/large-fileset/topic-049"},{"displayName":"topic_047","url":"contents/large-fileset/topic-047"},{"displayName":"topic_045","url":"contents/large-fileset/topic-045"},{"displayName":"topic_043","url":"contents/large-fileset/topic-043"},{"displayName":"topic_041","url":"contents/large-fileset/topic-041"},{"displayName":"topic_039","url":"contents/large-fileset/topic-039"},{"displayName":"topic_037","url":"contents/large-fileset/topic-037"},{"displayName":"topic_035","url":"contents/large-fileset/topic-035"},{"displayName":"topic_033","url":"contents/large-fileset/topic-033"},{"displayName":"topic_031","url":"contents/large-fileset/topic-031"},{"displayName":"topic_029","url":"contents/large-fileset/topic-029"},{"displayName":"topic_027","url":"contents/large-fileset/topic-027"},{"displayName":"topic_064","url":"contents/large-fileset/topic-064"},{"displayName":"topic_074","url":"contents/large-fileset/topic-074"},{"displayName":"topic_072","url":"contents/large-fileset/topic-072"},{"displayName":"topic_070","url":"contents/large-fileset/topic-070"},{"displayName":"topic_068","url":"contents/large-fileset/topic-068"},{"displayName":"topic_066","url":"contents/large-fileset/topic-066"},{"displayName":"topic_062","url":"contents/large-fileset/topic-062"},{"displayName":"topic_060","url":"contents/large-fileset/topic-060"},{"displayName":"topic_058","url":"contents/large-fileset/topic-058"},{"displayName":"topic_056","url":"contents/large-fileset/topic-056"},{"displayName":"topic_054","url":"contents/large-fileset/topic-054"},{"displayName":"topic_052","url":"contents/large-fileset/topic-052"},{"displayName":"topic_075","url":"contents/large-fileset/topic-075"},{"displayName":"topic_073","url":"contents/large-fileset/topic-073"},{"displayName":"topic_071","url":"contents/large-fileset/topic-071"},{"displayName":"topic_069","url":"contents/large-fileset/topic-069"},{"displayName":"topic_065","url":"contents/large-fileset/topic-065"},{"displayName":"topic_063","url":"contents/large-fileset/topic-063"},{"displayName":"topic_059","url":"contents/large-fileset/topic-059"},{"displayName":"topic_061","url":"contents/large-fileset/topic-061"},{"displayName":"topic_057","url":"contents/large-fileset/topic-057"},{"displayName":"topic_055","url":"contents/large-fileset/topic-055"},{"displayName":"topic_053","url":"contents/large-fileset/topic-053"},{"displayName":"topic_051","url":"contents/large-fileset/topic-051"},{"displayName":"topic_024","url":"contents/large-fileset/topic-024"},{"displayName":"topic_022","url":"contents/large-fileset/topic-022"},{"displayName":"topic_020","url":"contents/large-fileset/topic-020"},{"displayName":"topic_018","url":"contents/large-fileset/topic-018"},{"displayName":"topic_016","url":"contents/large-fileset/topic-016"},{"displayName":"topic_014","url":"contents/large-fileset/topic-014"},{"displayName":"topic_012","url":"contents/large-fileset/topic-012"},{"displayName":"topic_010","url":"contents/large-fileset/topic-010"},{"displayName":"topic_008","url":"contents/large-fileset/topic-008"},{"displayName":"topic_006","url":"contents/large-fileset/topic-006"},{"displayName":"topic_004","url":"contents/large-fileset/topic-004"},{"displayName":"topic_002","url":"contents/large-fileset/topic-002"},{"displayName":"topic_025","url":"contents/large-fileset/topic-025"},{"displayName":"topic_023","url":"contents/large-fileset/topic-023"},{"displayName":"topic_021","url":"contents/large-fileset/topic-021"},{"displayName":"topic_019","url":"contents/large-fileset/topic-019"},{"displayName":"topic_017","url":"contents/large-fileset/topic-017"},{"displayName":"topic_015","url":"contents/large-fileset/topic-015"},{"displayName":"topic_003","url":"contents/large-fileset/topic-003"},{"displayName":"topic_005","url":"contents/large-fileset/topic-005"},{"displayName":"topic_007","url":"contents/large-fileset/topic-007"},{"displayName":"topic_009","url":"contents/large-fileset/topic-009"},{"displayName":"topic_011","url":"contents/large-fileset/topic-011"},{"displayName":"topic_013","url":"contents/large-fileset/topic-013"},{"displayName":"topic_077","url":"contents/large-fileset/topic-077"},{"displayName":"topic_079","url":"contents/large-fileset/topic-079"},{"displayName":"topic_081","url":"contents/large-fileset/topic-081"},{"displayName":"topic_083","url":"contents/large-fileset/topic-083"},{"displayName":"topic_085","url":"contents/large-fileset/topic-085"},{"displayName":"topic_087","url":"contents/large-fileset/topic-087"},{"displayName":"topic_089","url":"contents/large-fileset/topic-089"},{"displayName":"topic_091","url":"contents/large-fileset/topic-091"},{"displayName":"topic_093","url":"contents/large-fileset/topic-093"},{"displayName":"topic_095","url":"contents/large-fileset/topic-095"},{"displayName":"topic_097","url":"contents/large-fileset/topic-097"},{"displayName":"topic_099","url":"contents/large-fileset/topic-099"},{"displayName":"topic_076","url":"contents/large-fileset/topic-076"},{"displayName":"topic_078","url":"contents/large-fileset/topic-078"},{"displayName":"topic_080","url":"contents/large-fileset/topic-080"},{"displayName":"topic_084","url":"contents/large-fileset/topic-084"},{"displayName":"topic_086","url":"contents/large-fileset/topic-086"},{"displayName":"topic_088","url":"contents/large-fileset/topic-088"},{"displayName":"topic_090","url":"contents/large-fileset/topic-090"},{"displayName":"topic_092","url":"contents/large-fileset/topic-092"},{"displayName":"topic_094","url":"contents/large-fileset/topic-094"},{"displayName":"topic_096","url":"contents/large-fileset/topic-096"},{"displayName":"topic_098","url":"contents/large-fileset/topic-098"},{"displayName":"topic_100","url":"contents/large-fileset/topic-100"},{"displayName":"topic_001","url":"contents/large-fileset/topic-001"}]
const mapTitle = "Large Test Map"
const isDesktop = window.matchMedia("(min-width: 900px)");

function expandHeirarchy(element, root) {
  if (element === root) return;
  let parent = element.parentElement;
  parent.classList.remove("closed");
  expandHeirarchy(parent, root);
}

function expandSelection(parent) {
  let queryString = window.location.search;
  let params = new URLSearchParams(queryString);
  let id = params.get("expand");
  let element = document.getElementById(`sidenav-li-${id}`);
  if (!element) return;
  element.classList.add("selected");
  expandHeirarchy(element, parent);
  element.scrollIntoView();
}

function scrollSidenavSelectionToView() {
  const element = document.querySelector('.sidenav-list-item.selected')
  const sidenavContainer = document.getElementsByClassName("sidenav-container")[0];
  if(!element) return
  if (element.offsetTop < sidenavContainer.scrollTop || element.offsetTop + element.offsetHeight > sidenavContainer.scrollTop + sidenavContainer.clientHeight) {
    sidenavContainer.scrollTo({
      top: Math.max(element.offsetTop - 110, 0),
      behavior: 'smooth'
    });
  }
}



function addResizeBar() {
  const sidenavContainer = document.getElementsByClassName("sidenav-container")[0];
  const div = document.createElement("div");
  div.classList.add('sidenav-resize-bar');
  let isResizing = false
  div.addEventListener('mousedown', (evt) => {
    isResizing = true
    document.addEventListener('mousemove', function (event) {
      if (isResizing) {
        let newWidth = event.pageX - sidenavContainer.offsetLeft;
        sidenavContainer.style.width = `${newWidth}px`;
      }
    })
  })
  document.addEventListener('mouseup', function () {
    if (isResizing) {
      isResizing = false;
    }
  })
  sidenavContainer.insertAdjacentElement("afterend", div)
}

function addExpandCollapseButton() {
  const divWrapper = document.createElement("div");
  divWrapper.classList.add('title-close-wrapper')
  const titleSpan = document.createElement("span");
  titleSpan.classList.add('title-span')
  titleSpan.textContent = mapTitle
  const span = document.createElement("span");
  span.classList.add('sidenav-expand-collapse')
  span.classList.add('open')
  const sidenavContainer = document.getElementsByClassName("sidenav-container")[0];
  span.addEventListener('click', () => {
    const isOpen = span.classList.contains('open')
    const sidenavResizer = document.getElementsByClassName("sidenav-resize-bar")[0];
    if(!isOpen) {
      sidenavContainer.classList.remove('collapse-width')
      sidenavResizer.classList.remove('force-hide')
    } else {
      sidenavContainer.classList.add('collapse-width')
      sidenavResizer.classList.add('force-hide')
    }
    span.classList.toggle("open");
  })
  divWrapper.append(titleSpan)
  divWrapper.append(span)
  sidenavContainer.prepend(divWrapper)
}

function generateId(prefix, suffix) {
  if(prefix) {
      return `${prefix}-${suffix}`
  }
  return `${suffix}`
}


window.addEventListener('aem-app-ready', () => {
  scrollSidenavSelectionToView()
})


function createTree(parent, data, prefix, level) {
  const ul = document.createElement("ul");
  ul.classList.add("tree");
  parent.appendChild(ul);
  data.forEach((item, idx) => {
    const li = document.createElement("li");
    const newPrefix = generateId(prefix, level)
    const _id = generateId(newPrefix, idx);
    li.setAttribute("id", `sidenav-li-${_id}`);
    ul.appendChild(li);
    const anchor = document.createElement("a");
    const span = document.createElement("span");
    span.classList.add("chevron-icon-span");
    anchor.textContent = item.displayName;
    anchor.setAttribute("data-li-id", _id);
    anchor.setAttribute("title", item.displayName);
    anchor.setAttribute("aria-label", item.displayName);
    const siteURL =
      window.location.protocol +
      "//" +
      window.location.hostname +
      (window.location.port ? ":" + window.location.port : "");
    if (item.url) {
      let navURL = new URL(item.url, siteURL).href;
      anchor.setAttribute("href", navURL);
      anchor.addEventListener("click", (event) => {
        event.preventDefault();
        onClick(anchor.getAttribute("data-li-id"), navURL);
      });
    }
    li.classList.add("sidenav-list-item");
    li.classList.add("closed");
    if (item.children) {
      li.classList.add("has-children");
      const wrapperSpan = document.createElement("span");
      wrapperSpan.classList.add("chevron-text-wrapper");
      wrapperSpan.appendChild(span);
      wrapperSpan.appendChild(anchor);
      li.appendChild(wrapperSpan);
      createTree(li, item.children, newPrefix, idx);
    } else {
      li.appendChild(anchor);
    }
  });
}

function onClick(id, navURL) {
  const url = new URL(navURL);
  url.searchParams.set("expand", id); // set the query parameter
  window.location.href = url.toString(); // navigate
}

// Get the treeview element and create the tree
const treeview = document.getElementsByClassName("sidenav")[0];
addExpandCollapseButton();
createTree(treeview, treeData, '', '');
migrateTree(isDesktop);
addResizeBar(treeview);
isDesktop.addEventListener("change", () => migrateTree(isDesktop));
expandSelection(treeview);

// Add click event listener to each span element
treeview.querySelectorAll("span").forEach((span) => {
  span.addEventListener("click", (event) => {
    // Toggle the "closed" class on the parent li element
    event.currentTarget.parentNode.classList.toggle("closed");
  });
});