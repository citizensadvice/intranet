module.exports = {
  id: "backstop_default",
  viewports: [{ label: "Large", width: 1024, height: 768 }],
  scenarios: [
    {
      label: "Home page",
      url: "http://host.docker.internal:4567/",
      selector: ["document"],
    },
    {
      label: "Witness page",
      url: "http://host.docker.internal:4567/witness",
      selector: ["document"],
    },
  ],
  paths: {
    bitmaps_reference: "backstop_data/bitmaps_reference",
    bitmaps_test: "backstop_data/bitmaps_test",
    html_report: "backstop_data/html_report",
    ci_report: "backstop_data/ci_report",
  },
  dockerCommandTemplate:
    'docker run --rm -i --mount -p=4567:4567 type=bind,source="{cwd}",target=/src backstopjs/backstopjs:{version} {backstopCommand} {args}',
  report: ["browser"],
  engine: "puppeteer",
  engineOptions: {
    args: ["--no-sandbox"],
  },
};
