import ImageBorder from "@/components/ImageBorder";
import "@styles/pages/sshconfig_lint.scss";
import {
  IoTerminalOutline as TerminalIcon,
  IoLogoGithub as GithubIcon,
} from "react-icons/io5";
import { useTranslation } from "react-i18next";

const previewImage =
  "/Projects/sshconfig-lint/sshconfig-lint-video-demo.mp4";

export default function SSHConfigLint() {
  const { t } = useTranslation();

  return (
    <>
      <section
        className="sshconfig-lint-hero"
        aria-labelledby="sshconfig-lint-title"
      >
        <div className="sshconfig-lint-hero-icon" aria-hidden="true">
          <TerminalIcon />
        </div>
        <h1 id="sshconfig-lint-title">{t("sshconfigLint.hero.title")}</h1>
        <div className="project-hero-badges">
          <a
            href="https://github.com/Noah4ever/sshconfig-lint"
            className="view-github-badge"
          >
            View on GitHub <GithubIcon />
          </a>
        </div>
        <ul className="project-hero-tags">
          <li className="project-tag--rust">Rust</li>
          <li className="project-tag--cli">CLI</li>
          <li className="project-tag--open-source">Open Source</li>
        </ul>
        <p className="sshconfig-lint-tagline">
          {t("sshconfigLint.hero.tagline")}
        </p>
      </section>

      <section
        className="project-section"
        aria-labelledby="sshconfig-lint-what-heading"
      >
        <h2 id="sshconfig-lint-what-heading">
          {t("sshconfigLint.sections.whatTitle")}
        </h2>
        <p>{t("sshconfigLint.sections.whatText")}</p>
      </section>

      <section
        className="sshconfig-lint-image"
        aria-labelledby="sshconfig-lint-image-heading"
      >
        <h2 id="sshconfig-lint-image-heading" className="sr-only">
          {t("sshconfigLint.sections.screenshotTitle")}
        </h2>
        <figure>
          <ImageBorder
            src={previewImage}
            alt={t("sshconfigLint.image.alt")}
            objectPosition="left center"
          />
          <figcaption>{t("sshconfigLint.image.caption")}</figcaption>
        </figure>
      </section>

      <section
        className="project-section"
        aria-labelledby="sshconfig-lint-install-heading"
      >
        <h2 id="sshconfig-lint-install-heading">
          {t("sshconfigLint.sections.installTitle")}
        </h2>
        <ul className="sshconfig-lint-feature-list" role="list">
          <li>
            <div>
              <strong>{t("sshconfigLint.install.scriptTitle")}</strong>
              <p>{t("sshconfigLint.install.scriptText")}</p>
            </div>
          </li>
          <li>
            <div>
              <strong>{t("sshconfigLint.install.brewTitle")}</strong>
              <p>{t("sshconfigLint.install.brewText")}</p>
            </div>
          </li>
          <li>
            <div>
              <strong>{t("sshconfigLint.install.cargoTitle")}</strong>
              <p>{t("sshconfigLint.install.cargoText")}</p>
            </div>
          </li>
          <li>
            <div>
              <strong>{t("sshconfigLint.install.aurTitle")}</strong>
              <p>{t("sshconfigLint.install.aurText")}</p>
            </div>
          </li>
        </ul>

        <h3>{t("sshconfigLint.install.scriptTitle")}</h3>
        <pre className="code-block">
          <code>{String.raw`curl -fsSL https://raw.githubusercontent.com/Noah4ever/sshconfig-lint/main/install.sh | bash`}</code>
        </pre>

        <h3>{t("sshconfigLint.install.brewTitle")}</h3>
        <pre className="code-block">
          <code>{String.raw`brew tap Noah4ever/tap
brew install sshconfig-lint`}</code>
        </pre>

        <h3>{t("sshconfigLint.install.cargoTitle")}</h3>
        <pre className="code-block">
          <code>{String.raw`cargo install sshconfig-lint`}</code>
        </pre>

        <h3>{t("sshconfigLint.install.aurTitle")}</h3>
        <pre className="code-block">
          <code>{String.raw`yay -S sshconfig-lint-bin
paru -S sshconfig-lint-bin`}</code>
        </pre>
      </section>

      <section
        className="project-section"
        aria-labelledby="sshconfig-lint-usage-heading"
      >
        <h2 id="sshconfig-lint-usage-heading">
          {t("sshconfigLint.sections.usageTitle")}
        </h2>
        <p>{t("sshconfigLint.usage.intro")}</p>
        <pre className="code-block">
          <code>{String.raw`# lint the default ~/.ssh/config
sshconfig-lint

# lint a specific file
sshconfig-lint --config /path/to/config

# json output
sshconfig-lint --format json

# treat warnings as errors (useful in CI)
sshconfig-lint --strict

# skip Include resolution
sshconfig-lint --no-includes`}</code>
        </pre>
      </section>

      <section
        className="project-section"
        aria-labelledby="sshconfig-lint-rules-heading"
      >
        <h2 id="sshconfig-lint-rules-heading">
          {t("sshconfigLint.sections.rulesTitle")}
        </h2>
        <p>{t("sshconfigLint.rules.intro")}</p>
        <ul className="sshconfig-lint-rule-list">
          <li>DUP_HOST - duplicate-host</li>
          <li>MISSING_IDENTITY - identity-file-exists</li>
          <li>WILDCARD_ORDER - wildcard-host-order</li>
          <li>WEAK_ALGO - deprecated-weak-algorithms</li>
          <li>INCLUDE_CYCLE - include-cycle</li>
          <li>UNSAFE_CTRL_PATH - unsafe-control-path</li>
        </ul>
      </section>

      <section
        className="project-section"
        aria-labelledby="sshconfig-lint-dev-heading"
      >
        <h2 id="sshconfig-lint-dev-heading">
          {t("sshconfigLint.sections.devTitle")}
        </h2>
        <p>{t("sshconfigLint.dev.intro")}</p>
        <pre className="code-block">
          <code>{String.raw`src/
  main.rs        CLI
  lib.rs         Public API (lint_file, lint_str)
  model.rs       AST types
  lexer.rs       Tokenizer
  parser.rs      Builds config AST from tokens
  resolve.rs     Include expansion + cycle detection
  report.rs      Text and JSON formatters
  rules/
    mod.rs       Rule trait and runner
    basic.rs     Built-in rules
tests/
  fixtures/      Sample config files
  cli.rs         CLI integration tests
  integration.rs Fixture-based tests`}</code>
        </pre>
      </section>
    </>
  );
}
