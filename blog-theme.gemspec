# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "blog-theme"
  spec.version       = "0.3.2"
  spec.authors       = ["Justin Hamilton"]
  spec.email         = ["jwhamilton99@gmail.com"]

  spec.summary       = "my blog theme"
  spec.homepage      = "https://www.jwhamilton.co"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.0"

  spec.add_development_dependency "bundler", "~> 2.2.10"
  spec.add_development_dependency "rake", "~> 12.0"
end
