require 'sinatra'

get '/' do
	erb :index
end

get '/account' do
	erb :account
end

get '/campaign' do
	erb :campaign
end