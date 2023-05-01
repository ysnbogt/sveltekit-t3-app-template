run: format
	npm run dev

test: format
	npm run test

playwright: format
	npm run test:playwright

format:
	npm run format

studio:
	npx prisma studio
