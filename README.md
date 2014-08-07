# openchattanooga.com

This is the GitHub repository for Open Chattanooga's website. You can submit issues or send pull requests if you notice anything wrong with the website.

## Contributing

### Directly On GitHub

The project utilizes GitHub page's Jekyll support. If you see something that needs to be resolved that is relatively straightforward, you can fork the project, edit the source in your fork using GitHub's built-in editor and send a pull request. If your pull request is accepted, the page will be automatically updated.

### On Your Local Machine

If your change is more complicated, you will want to fork the project, clone your fork, and perform edits on your local machine.

#### Requirements

At least [Ruby](https://www.ruby-lang.org/en/installation/) 1.9.3 and [Bundler](http://bundler.io/).

#### Project Setup

You first need to install the project's Ruby dependencies. From the root directory, run:

```bash
bundle install
```

You then need to then initialize the git submodules which house our frontend dependencies:

```bash
git submodule init
git submodule update
```

#### Running

To run the project:

```bash
bundle exec jekyll serve --watch
```

The site will now be available at `http://localhost:4000`. Jekyll will watch for changes in the project and reload them.

## License

This project is under the MIT license. See `LICENSE` for more details.
