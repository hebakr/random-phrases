class HomeController < ApplicationController
  def index

  end

  def fetchPhrase
    render json: Phrase.offset(rand(Phrase.count)).first
  end
end
